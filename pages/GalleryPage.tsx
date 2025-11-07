
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const galleryItems = [
  {
    title: 'City Air',
    polluted: {
      img: 'https://picsum.photos/seed/smog/500/300',
      caption: 'Polluted: A city skyline blanketed in smog.'
    },
    clean: {
      img: 'https://picsum.photos/seed/cleancity/500/300',
      caption: 'Clean: A clear city skyline with blue skies.'
    }
  },
  {
    title: 'Rivers',
    polluted: {
      img: 'https://picsum.photos/seed/dirtyriver/500/300',
      caption: 'Polluted: A river choked with trash and waste.'
    },
    clean: {
      img: 'https://picsum.photos/seed/cleanriver/500/300',
      caption: 'Clean: A pristine river flowing through nature.'
    }
  },
  {
    title: 'Forests & Land',
    polluted: {
      img: 'https://picsum.photos/seed/landfill/500/300',
      caption: 'Polluted: A landfill with piles of garbage.'
    },
    clean: {
      img: 'https://picsum.photos/seed/forest/500/300',
      caption: 'Clean: A lush, green forest teeming with life.'
    }
  },
    {
    title: 'Beaches',
    polluted: {
      img: 'https://picsum.photos/seed/trashbeach/500/300',
      caption: 'Polluted: A beach covered in plastic debris.'
    },
    clean: {
      img: 'https://picsum.photos/seed/cleanbeach/500/300',
      caption: 'Clean: A beautiful, sandy beach with clear water.'
    }
  }
];

const GalleryCard: React.FC<{
  title: string;
  polluted: { img: string; caption: string };
  clean: { img: string; caption: string };
}> = ({ title, polluted, clean }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <h3 className="text-xl font-bold text-center py-3 bg-blue-700 text-white">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-4">
        <img src={polluted.img} alt={polluted.caption} className="w-full h-48 object-cover rounded-md mb-2"/>
        <p className="text-sm text-gray-700 italic">{polluted.caption}</p>
      </div>
      <div className="p-4 bg-green-50">
        <img src={clean.img} alt={clean.caption} className="w-full h-48 object-cover rounded-md mb-2"/>
        <p className="text-sm text-gray-700 italic">{clean.caption}</p>
      </div>
    </div>
  </div>
);

const GalleryPage: React.FC = () => {
  return (
    <PageWrapper title="Gallery: Before & After">
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Visualizing the impact of pollution and the beauty of a clean environment can be a powerful motivator for change. Here are some comparisons.
        </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {galleryItems.map((item, index) => (
          <GalleryCard key={index} {...item} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default GalleryPage;
