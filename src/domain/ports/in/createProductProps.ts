import { ProductStatus } from '@Entities/productStatus';

export interface ProductCreateProps {
  sku: string
  slug: string
  name: string
  description: string
  properties: Map<string, string>
  deleted: boolean
  active: boolean
  status:  ProductStatus
  imageUrl: Map<string, string>
}