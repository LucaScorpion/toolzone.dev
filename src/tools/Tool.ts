import React from 'react';

export interface Tool {
  name: string;
  additionalTags: string;
  Component: React.FC;
}
