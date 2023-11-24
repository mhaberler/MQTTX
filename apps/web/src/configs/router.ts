type ComponentResolver = () => Promise<any>

export const routerComponentMap: Record<string, ComponentResolver> = {
  ConnectionsComponent: () => import('@/pages/connections/Index.vue'),
  ConnectionDetailsComponent: () => import('@/pages/connections/Details.vue'),
  AboutComponent: () => import('@/pages/about/Index.vue'),
}

export default {}
