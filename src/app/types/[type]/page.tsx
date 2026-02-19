'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getMBTIType, mbtiTypes } from '@/data/mbtiData';
import { getTypeDetails } from '@/data/typeDetails';
import {
  AlertTriangle,
  Briefcase,
  GraduationCap,
  Heart,
  MessageSquare,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function TypeProfile() {
  const { type } = useParams();
  console.log(type);
  const [selectedType, setSelectedType] = useState((type as string) || '');

  const mbtiType = selectedType ? getMBTIType(selectedType) : null;
  const details = selectedType ? getTypeDetails(selectedType) : null;

  return (
    <div className='container mx-auto px-4 py-8 max-w-7xl'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold mb-2'>Type Profile</h1>
        <p className='text-gray-600'>
          Select an MBTI type to explore detailed information, career paths, and
          famous examples
        </p>
      </div>

      {/* Type Selector */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Users className='h-5 w-5' />
            Select MBTI Type
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className='w-full md:w-96'>
              <SelectValue placeholder='Choose a type to explore...' />
            </SelectTrigger>
            <SelectContent>
              {mbtiTypes.map((type) => (
                <SelectItem key={type.code} value={type.code}>
                  {type.code} - {type.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {mbtiType && details && (
        <div className='space-y-6'>
          {/* Header Card */}
          <Card className='border-2' style={{ borderColor: mbtiType.color }}>
            <CardContent className='pt-6'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div>
                  <div className='flex items-center gap-3 mb-2'>
                    <h2
                      className='text-4xl font-bold'
                      style={{ color: mbtiType.color }}
                    >
                      {mbtiType.code}
                    </h2>
                    <Badge
                      style={{ backgroundColor: mbtiType.color }}
                      className='text-white'
                    >
                      {mbtiType.category}
                    </Badge>
                  </div>
                  <h3 className='text-2xl font-semibold mb-2'>
                    {mbtiType.name}
                  </h3>
                  <p className='text-gray-700 max-w-2xl'>
                    {mbtiType.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Career Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Briefcase className='h-5 w-5' />
                  Career Paths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-gray-600 mb-4'>
                  {mbtiType.code}s often excel in these careers:
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                  {details.careers.map((career, idx) => (
                    <div
                      key={idx}
                      className='flex items-center gap-2 text-sm p-2 bg-gray-50 rounded-md'
                    >
                      <div
                        className='w-1.5 h-1.5 rounded-full'
                        style={{ backgroundColor: mbtiType.color }}
                      />
                      {career}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Famous People */}
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Star className='h-5 w-5' />
                  Famous {mbtiType.code}s
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-gray-600 mb-4'>
                  Notable people who share this type:
                </p>
                <div className='flex flex-wrap gap-2'>
                  {details.famousPeople.map((person, idx) => (
                    <Badge
                      key={idx}
                      variant='outline'
                      className='text-sm'
                      style={{
                        borderColor: mbtiType.color,
                        color: mbtiType.color,
                      }}
                    >
                      {person}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Strengths & Weaknesses */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <Card className='border-green-200 bg-green-50/30'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-green-700'>
                  <TrendingUp className='h-5 w-5' />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2'>
                  {mbtiType.strengths.map((strength, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <span className='text-green-600 mt-1 text-lg'>✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className='border-orange-200 bg-orange-50/30'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-orange-700'>
                  <AlertTriangle className='h-5 w-5' />
                  Weaknesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2'>
                  {mbtiType.weaknesses.map((weakness, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <span className='text-orange-600 mt-1 text-lg'>!</span>
                      <span>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Ideal Partners */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Heart className='h-5 w-5' />
                Most Compatible Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-gray-600 mb-4'>
                {mbtiType.code}s often form strong connections with:
              </p>
              <div className='flex flex-wrap gap-3'>
                {details.idealPartners.map((partner) => {
                  const partnerType = getMBTIType(partner);
                  return (
                    <div
                      key={partner}
                      className='px-4 py-2 rounded-lg border-2 font-semibold'
                      style={{
                        borderColor: partnerType?.color,
                        backgroundColor: `${partnerType?.color}15`,
                      }}
                    >
                      {partner}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Work & Learning Styles */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Briefcase className='h-5 w-5' />
                  Work Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-700'>{details.workStyle}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <GraduationCap className='h-5 w-5' />
                  Learning Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-700'>{details.learningStyle}</p>
              </CardContent>
            </Card>
          </div>

          {/* Communication Style */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <MessageSquare className='h-5 w-5' />
                Communication Style
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-700'>{details.communicationStyle}</p>
            </CardContent>
          </Card>

          {/* Stress Reactions */}
          <Card className='border-red-200 bg-red-50/20'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-red-700'>
                <AlertTriangle className='h-5 w-5' />
                Under Stress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-700'>{details.stressReactions}</p>
            </CardContent>
          </Card>

          {/* Growth Areas */}
          <Card className='border-purple-200 bg-purple-50/20'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-purple-700'>
                <TrendingUp className='h-5 w-5' />
                Growth Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {details.growthAreas.map((area, idx) => (
                  <li key={idx} className='flex items-start gap-2'>
                    <span className='text-purple-600 mt-1'>→</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Fun Facts */}
          <Card className='border-blue-200 bg-blue-50/20'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-blue-700'>
                <Sparkles className='h-5 w-5' />
                Fun Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                {details.funFacts.map((fact, idx) => (
                  <li key={idx} className='flex items-start gap-2'>
                    <span className='text-blue-600 mt-1'>✦</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {!selectedType && (
        <Card className='border-dashed'>
          <CardContent className='py-12 text-center text-gray-500'>
            <Users className='h-12 w-12 mx-auto mb-4 text-gray-400' />
            <p>Select an MBTI type above to explore detailed information</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
