import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '150'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '35a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a5f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9dd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '951'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '060'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '219'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'fda'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '230'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '126'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'ed6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '945'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '64e'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '4a7'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '197'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'a25'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'ab3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e63'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e86'),
    routes: [
      {
        path: '/docs/api/resources/mod',
        component: ComponentCreator('/docs/api/resources/mod', 'caa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/resources/mod_asset',
        component: ComponentCreator('/docs/api/resources/mod_asset', '76d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/resources/mod_instance',
        component: ComponentCreator('/docs/api/resources/mod_instance', '480'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/resources/mod_instance_script',
        component: ComponentCreator('/docs/api/resources/mod_instance_script', 'e48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/resources/mod_script',
        component: ComponentCreator('/docs/api/resources/mod_script', '759'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/resources/mod_settings',
        component: ComponentCreator('/docs/api/resources/mod_settings', 'ebf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/resources/registered-class',
        component: ComponentCreator('/docs/api/resources/registered-class', '749'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/singletons/mod-class-db',
        component: ComponentCreator('/docs/api/singletons/mod-class-db', '4f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/singletons/mod-loader',
        component: ComponentCreator('/docs/api/singletons/mod-loader', '454'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/singletons/mod-system',
        component: ComponentCreator('/docs/api/singletons/mod-system', '304'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/api-reference',
        component: ComponentCreator('/docs/category/api-reference', '6be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/resources',
        component: ComponentCreator('/docs/category/resources', '0c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/singletons',
        component: ComponentCreator('/docs/category/singletons', '102'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview',
        component: ComponentCreator('/docs/overview', '9fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e02'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
