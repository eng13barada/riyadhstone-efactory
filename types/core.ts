export interface Product {
  id: string;
  name: string;
  description?: string;
  sku: string;
  tenant_id: string;
  created_at: Date;
  updated_at: Date;
}

export type ProductFamily =
  | 'RiyadEx™'
  | 'RiyadFloor™'
  | 'RiyadCiv™'
  | 'RiyadWet™'
  | 'RiyadUrb™'
  | 'RiyadStep™'
  | 'RiyadRaw™';

export interface Project {
  id: string;
  name: string;
  client_name: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  tenant_id: string;
  start_date?: Date;
  end_date?: Date;
  created_at: Date;
  updated_at: Date;
}
