// TagFilter.tsx
import React, { useState } from 'react';

import TagButton from '@/components/buttons/TagButton';

import { AnimalTag, ContinentTag, Tag } from '@/types/Tags';

export const TagFilter: React.FC<{ onFilterChange: (tags: Tag[]) => void }> = ({
  onFilterChange,
}) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const toggleTag = (tag: Tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // logic: and, or

  React.useEffect(() => {
    onFilterChange(selectedTags);
  }, [selectedTags]);

  return (
    <div>
      {Object.values(AnimalTag).map((tag, index) => (
        <TagButton
          key={index}
          tag={tag}
          onClick={() => toggleTag(tag)}
          selected={selectedTags.includes(tag)}
        />
      ))}

      {/*<LogicButton logic={} selected={} />*/}
      {Object.values(ContinentTag).map((tag, index) => (
        <TagButton
          key={index}
          tag={tag}
          onClick={() => toggleTag(tag)}
          selected={selectedTags.includes(tag)}
        />
      ))}
    </div>
  );
};