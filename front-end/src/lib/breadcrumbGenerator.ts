type BreadcrumbElement = {
  label: string;
  link?: string | (() => string);
};

type BreadcrumbGeneratorData = {
  paths: string[];
  filterOption?: string;
  pathname?: string;
};

const breadcrumbGenerator = (
  data: BreadcrumbGeneratorData,
): BreadcrumbElement[] => {
  const { paths, filterOption, pathname } = data;

  const breadcrumbs: BreadcrumbElement[] = paths
    .filter(Boolean)
    .map((element) => {
      const labelMappings: Record<string, string> = {
        dashboard: 'Dashboard',
        blogs: 'Blog Articles',
        users: 'Users',
        products: 'Products',
        edit: 'Edit',
        create: 'Create',
      };

      const label = labelMappings[element];

      if (!label) {
        return null;
      }

      let link: string | (() => string) | undefined;

      switch (element) {
        case 'dashboard':
          link = '/dashboard/admin/';
          break;
        case 'blogs':
          link = '/dashboard/admin/blogs/';
          break;
        case 'users':
          link = '/dashboard/admin/users/';
          break;
        case 'products':
          link = '/dashboard/admin/products/';
          break;
        case 'edit':
          link = () => `/dashboard/admin/${paths[paths.length - 1]}/edit`;
          break;
        case 'create':
          link = () => `/dashboard/admin/${paths[paths.length - 1]}/edit`;
          break;
        default:
          break;
      }

      return { label, link };
    })
    .filter((breadcrumb) => breadcrumb !== null) as BreadcrumbElement[];

  if (filterOption === 'all') {
    breadcrumbs.push({
      label: 'All',
      link: `${pathname}?filter=${filterOption}`,
    });
  }

  return breadcrumbs;
};

export default breadcrumbGenerator;
