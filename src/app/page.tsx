'use client';

import { Header } from '@/components/Header/Header';
import {
  AlertCircle,
  Brain,
  Calendar,
  Heart,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  funFacts,
  getCompatibility,
  getMBTIType,
  mbtiTypes,
} from '@/data/mbtiData';
import { useState } from 'react';

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: '16 Personality Types',
      description:
        'Explore detailed information about all MBTI personality types',
    },
    {
      icon: Heart,
      title: 'Compatibility Analysis',
      description: 'Discover which types complement each other best',
    },
    {
      icon: Users,
      title: 'Interactive Dashboard',
      description: 'Compare any two types and see their compatibility ratings',
    },
    {
      icon: TrendingUp,
      title: 'Growth Insights',
      description:
        'Learn about strengths, weaknesses, and areas for development',
    },
  ];

  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');

  const compatibility = type1 && type2 ? getCompatibility(type1, type2) : null;
  const mbtiType1 = type1 ? getMBTIType(type1) : null;
  const mbtiType2 = type2 ? getMBTIType(type2) : null;

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-600 bg-green-50 border-green-200';
    if (rating >= 3) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getRatingLabel = (rating: number) => {
    if (rating === 5) return 'Excellent Match';
    if (rating === 4) return 'Great Compatibility';
    if (rating === 3) return 'Good Potential';
    if (rating === 2) return 'Challenging';
    return 'Very Challenging';
  };

  function getDailyFact(): string {
    const today = new Date();
    // Create a seed based on the date (year, month, day)
    const seed =
      today.getFullYear() * 10000 +
      (today.getMonth() + 1) * 100 +
      today.getDate();
    const index = seed % funFacts.length;
    return funFacts[index];
  }

  return (
    <div className='min-h-[calc(100vh-64px)]'>
      {/* Hero Section */}
      <Header currentTab='' />

      <div className='container mx-auto px-4 py-8 max-w-7xl'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>Compatibility Checker</h1>
          <p className='text-gray-600'>
            Select two MBTI types to explore their compatibility and
            relationship dynamics
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start'>
          <div className='space-y-8'>
            {/* Type Selectors */}
            <div className='grid grid-cols-1 md:grid-cols-2 items-start'>
              <Card className='w-80 shrink-0'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Users className='h-5 w-5' />
                    First Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={type1} onValueChange={setType1}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a type...' />
                    </SelectTrigger>
                    <SelectContent className='bg-white z-50'>
                      {mbtiTypes.map((type) => (
                        <SelectItem key={type.code} value={type.code}>
                          {type.code} - {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {mbtiType1 && (
                    <div className='mt-4'>
                      <Badge
                        style={{ backgroundColor: mbtiType1.color }}
                        className='text-white mb-2'
                      >
                        {mbtiType1.category}
                      </Badge>
                      <p className='text-sm text-gray-600'>
                        {mbtiType1.description}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card className='w-80 shrink-0'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Users className='h-5 w-5' />
                    Second Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={type2} onValueChange={setType2}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a type...' />
                    </SelectTrigger>
                    <SelectContent className='bg-white z-50'>
                      {mbtiTypes.map((type) => (
                        <SelectItem key={type.code} value={type.code}>
                          {type.code} - {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {mbtiType2 && (
                    <div className='mt-4'>
                      <Badge
                        style={{ backgroundColor: mbtiType2.color }}
                        className='text-white mb-2'
                      >
                        {mbtiType2.category}
                      </Badge>
                      <p className='text-sm text-gray-600'>
                        {mbtiType2.description}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            {/* Compatibility Results */}
            {compatibility && type1 && type2 && (
              <div className='space-y-6'>
                {/* Overall Rating */}
                <Card
                  className={` top-24 h-fit border ${getRatingColor(compatibility.rating)}`}
                >
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Heart className='h-6 w-6' />
                      Compatibility Rating
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='flex items-center gap-4 mb-4'>
                      <div className='text-5xl font-bold'>
                        {compatibility.rating}/5
                      </div>
                      <div>
                        <div className='text-xl font-semibold mb-1'>
                          {getRatingLabel(compatibility.rating)}
                        </div>
                        <div className='flex gap-1'>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < compatibility.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className='text-lg'>{compatibility.description}</p>
                  </CardContent>
                </Card>

                {/* Type Details Side by Side */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {mbtiType1 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <TrendingUp className='h-5 w-5' />
                          {mbtiType1.code} Strengths & Weaknesses
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className='mb-4'>
                          <h4 className='font-semibold text-green-700 mb-2'>
                            Strengths
                          </h4>
                          <ul className='space-y-1'>
                            {mbtiType1.strengths.map((strength, idx) => (
                              <li
                                key={idx}
                                className='text-sm flex items-start gap-2'
                              >
                                <span className='text-green-600 mt-1'>•</span>
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className='font-semibold text-orange-700 mb-2'>
                            Weaknesses
                          </h4>
                          <ul className='space-y-1'>
                            {mbtiType1.weaknesses.map((weakness, idx) => (
                              <li
                                key={idx}
                                className='text-sm flex items-start gap-2'
                              >
                                <span className='text-orange-600 mt-1'>•</span>
                                {weakness}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {mbtiType2 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <TrendingUp className='h-5 w-5' />
                          {mbtiType2.code} Strengths & Weaknesses
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className='mb-4'>
                          <h4 className='font-semibold text-green-700 mb-2'>
                            Strengths
                          </h4>
                          <ul className='space-y-1'>
                            {mbtiType2.strengths.map((strength, idx) => (
                              <li
                                key={idx}
                                className='text-sm flex items-start gap-2'
                              >
                                <span className='text-green-600 mt-1'>•</span>
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className='font-semibold text-orange-700 mb-2'>
                            Weaknesses
                          </h4>
                          <ul className='space-y-1'>
                            {mbtiType2.weaknesses.map((weakness, idx) => (
                              <li
                                key={idx}
                                className='text-sm flex items-start gap-2'
                              >
                                <span className='text-orange-600 mt-1'>•</span>
                                {weakness}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Tips */}
                <Alert>
                  <AlertCircle className='h-4 w-4' />
                  <AlertDescription>
                    Remember: MBTI compatibility is just one factor in
                    relationships. Communication, mutual respect, and shared
                    values are equally important for any successful partnership.
                  </AlertDescription>
                </Alert>
              </div>
            )}
            {!type1 || !type2 ? (
              <Card className='border-dashed'>
                <CardContent className='py-12 text-center text-gray-500'>
                  <Users className='h-12 w-12 mx-auto mb-4 text-gray-400' />
                  <p>
                    Select two MBTI types above to see their compatibility
                    analysis
                  </p>
                </CardContent>
              </Card>
            ) : null}
          </div>
          <Card className='w-80 shrink-0 self-start border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-purple-700'>
                <Sparkles className='h-5 w-5' />
                Fun Fact of the Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex items-start gap-2 mb-3'>
                <Calendar className='h-4 w-4 text-purple-600 mt-1 flex-shrink-0' />
                <p className='text-sm text-purple-600 font-medium'>
                  {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <p className='text-gray-700 leading-relaxed'>{getDailyFact()}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <section className='py-16 px-4 '>
        <div className='container mx-auto max-w-6xl'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            Why Use MBTI Match?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='border-2 hover:border-purple-300 transition-colors'
              >
                <CardContent className='pt-6'>
                  <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4'>
                    <feature.icon className='h-6 w-6 text-white' />
                  </div>
                  <h3 className='font-bold text-lg mb-2'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
