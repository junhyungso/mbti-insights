'use client';

import { Header } from '@/components/Header/Header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories, mbtiTypes } from '@/data/mbtiData';
import { Filter, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AllTypes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredTypes = mbtiTypes.filter((type) => {
    const matchesSearch =
      type.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      type.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      type.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === 'all' || type.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const router = useRouter();

  return (
    <>
      <Header currentTab='types' />
      <div className='container mx-auto px-4 py-8 max-w-7xl'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>All MBTI Types</h1>
          <p className='text-gray-600'>
            Explore all 16 Myers-Briggs personality types and their
            characteristics
          </p>
        </div>

        {/* Filters */}
        <div className='flex flex-col sm:flex-row gap-4 mb-8'>
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
            <Input
              placeholder='Search types...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-10'
            />
          </div>
          <div className='flex items-center gap-2 sm:w-64'>
            <Filter className='h-4 w-4 text-gray-400' />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder='Filter by category' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Categories</SelectItem>
                {Object.keys(categories).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Categories Overview */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
          {Object.entries(categories).map(([name, data]) => (
            <Card
              key={name}
              className={`cursor-pointer transition-all ${
                categoryFilter === name ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() =>
                setCategoryFilter(categoryFilter === name ? 'all' : name)
              }
            >
              <CardHeader className='pb-3'>
                <CardTitle className='text-lg'>{name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-gray-600 mb-3'>{data.description}</p>
                <div className='flex flex-wrap gap-1'>
                  {data.types.map((type) => (
                    <Badge key={type} variant='outline' className='text-xs'>
                      {type}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Types Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filteredTypes.map((type) => (
            <Card
              key={type.code}
              className='hover:shadow-lg transition-shadow border-2'
              onClick={() => router.push(`/types/${type.code}`)}
            >
              <CardHeader>
                <div className='flex items-start justify-between mb-2'>
                  <div>
                    <div
                      className='text-2xl font-bold mb-1'
                      style={{ color: type.color }}
                    >
                      {type.code}
                    </div>
                    <div className='font-semibold text-lg'>{type.name}</div>
                  </div>
                  <Badge
                    style={{ backgroundColor: type.color }}
                    className='text-white text-xs'
                  >
                    {type.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-gray-600 mb-4'>{type.description}</p>

                <div className='space-y-3'>
                  <div>
                    <h4 className='font-semibold text-sm text-green-700 mb-1'>
                      Strengths
                    </h4>
                    <div className='flex flex-wrap gap-1'>
                      {type.strengths.slice(0, 3).map((strength, idx) => (
                        <Badge
                          key={idx}
                          variant='outline'
                          className='text-xs border-green-300 text-green-700'
                        >
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='font-semibold text-sm text-orange-700 mb-1'>
                      Weaknesses
                    </h4>
                    <div className='flex flex-wrap gap-1'>
                      {type.weaknesses.slice(0, 3).map((weakness, idx) => (
                        <Badge
                          key={idx}
                          variant='outline'
                          className='text-xs border-orange-300 text-orange-700'
                        >
                          {weakness}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTypes.length === 0 && (
          <div className='text-center py-12 text-gray-500'>
            <p>No types found matching your search criteria.</p>
          </div>
        )}
      </div>
    </>
  );
}
