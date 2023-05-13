import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'qs6rsi74',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skaHyJGh8e3UXfpRJ8KMGtL8Y08a0ZO05d2IidlMlWQBCdp3SfrgbXkXjPk5p2lOGzDUep0KMiqvE6pFS8jC5h0G0AAJ8Z2dVeCLEqd5UrjUvVPyNZA2LPdWjCZC8eRACI6Kb36hv39z0H3gzZBqdyiYN5YNXmikW9rWifjzYuZ5det18IFw',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
