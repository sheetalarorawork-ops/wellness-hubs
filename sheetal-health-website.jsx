import React, { useState, useMemo } from 'react';
import { Search, ChevronRight, Leaf } from 'lucide-react';

const topics = [
  {
    id: 'turmeric',
    title: 'Turmeric: Benefits & Uses',
    icon: '🌿',
    sections: [
      {
        subtitle: 'Curcumin and Turmeric',
        content:
          'Curcumin is the main active compound in turmeric. It is often discussed for its antioxidant and anti-inflammatory properties.',
      },
      {
        subtitle: 'How to Make Golden Milk',
        content:
          'Mix turmeric with warm milk, a pinch of black pepper, and a little honey for flavor.',
      },
      {
        subtitle: 'How to Use It Better',
        content:
          'Turmeric is commonly paired with black pepper or healthy fats to improve absorption.',
      },
    ],
  },
  {
    id: 'immunity',
    title: 'Natural Ways to Support Immunity',
    icon: '💪',
    sections: [
      {
        subtitle: 'Vitamin C Foods',
        content:
          'Citrus fruits, berries, and leafy greens are common sources of vitamin C.',
      },
      {
        subtitle: 'Zinc Sources',
        content:
          'Pumpkin seeds, chickpeas, lentils, and cashews provide zinc.',
      },
      {
        subtitle: 'Sleep and Hydration',
        content:
          'Good sleep, enough water, and balanced meals are important for overall health.',
      },
    ],
  },
  {
    id: 'digestion',
    title: 'Herbs & Spices for Digestion',
    icon: '🌱',
    sections: [
      {
        subtitle: 'Ginger',
        content:
          'Ginger is commonly used for nausea and digestive discomfort.',
      },
      {
        subtitle: 'Fennel and Peppermint',
        content:
          'Fennel and peppermint are often used in teas after meals.',
      },
      {
        subtitle: 'Cumin',
        content:
          'Cumin is widely used in cooking and may help make meals easier to digest.',
      },
    ],
  },
  {
    id: 'seeds',
    title: 'Seeds & Superfoods',
    icon: '🌾',
    sections: [
      {
        subtitle: 'Chia and Flax',
        content:
          'Chia and flax are popular sources of fiber and healthy fats.',
      },
      {
        subtitle: 'Pumpkin and Sunflower Seeds',
        content:
          'These seeds are nutrient-dense and easy to add to meals.',
      },
      {
        subtitle: 'Basil Seeds',
        content:
          'Basil seeds are often soaked in water or milk before use.',
      },
    ],
  },
];

export default function HealthWebsite() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = useMemo(() => {
    if (!searchQuery) return topics;
    return topics.filter((topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const selectedTopic = topics.find((topic) => topic.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="sticky top-0 bg-white border-b border-slate-200 shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-slate-900">Wellness Hub</h1>
            </div>
            <p className="text-sm text-slate-600">Health and wellness website</p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {activeTab === 'home' && (
          <div className="mb-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Your Complete Wellness Guide
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              Explore simple wellness topics, healthy foods, and natural ingredients.
            </p>
            <button
              onClick={() => setActiveTab('home')}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Explore All Topics
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setActiveTab(topic.id)}
              className="bg-white border border-slate-200 rounded-lg p-6 cursor-pointer hover:shadow-lg hover:border-emerald-300 transition-all duration-200 group"
            >
              <div className="text-4xl mb-3">{topic.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition">
                {topic.title}
              </h3>
              <p className="text-sm text-slate-600 flex items-center gap-1">
                Read more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </p>
            </div>
          ))}
        </div>

        {activeTab !== 'home' && selectedTopic && (
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{selectedTopic.icon}</span>
              <h2 className="text-3xl font-bold text-slate-900">
                {selectedTopic.title}
              </h2>
            </div>

            <div className="space-y-8">
              {selectedTopic.sections.map((section, idx) => (
                <div key={idx} className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {section.subtitle}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveTab('home')}
              className="mt-8 px-6 py-3 bg-slate-200 text-slate-900 rounded-lg font-semibold hover:bg-slate-300 transition"
            >
              Back to Topics
            </button>
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2026 Wellness Hub. All rights reserved.</p>
          <p className="text-sm text-slate-500">
            This website is for educational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}
