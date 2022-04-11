import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
};

export function PageHead({ title }: Props) {
  return (
    <Helmet>
      <html lang='en' />
      <link rel='icon' type='image/png' href='/favicon.png' />
      <title>{title}</title>
    </Helmet>
  );
}
