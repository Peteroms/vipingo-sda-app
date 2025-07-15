import React, { useEffect, useState } from 'react';

const MediaGallery = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch("https://your-api-id.execute-api.region.amazonaws.com/prod/gallery")
      .then(res => res.json())
      .then(data => setMedia(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Media Gallery</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {media.map(item => (
          <div key={item.id} className="bg-white p-2 rounded shadow">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded" />
            <p className="mt-2 text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;
