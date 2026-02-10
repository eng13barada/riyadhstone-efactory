# E-FACTORY DATA MODEL

Define the data objects that connect RiyadhStone outputs to E-Factory.

## Objects

### 1. Inquiry

- `id`: string (UUID)
- `clientId`: string
- `type`: 'general' | 'project'
- `status`: 'new' | 'processing' | 'closed'
- `message`: string

### 2. QuoteRequest (RFQ)

- `id`: string (UUID)
- `inquiryId`: string
- `lineItems`: Array<{ materialId: string, quantity: number, unit: string }>
- `deadline`: Date
- `status`: 'draft' | 'submitted' | 'quoted'

### 3. SampleRequest

- `id`: string (UUID)
- `materials`: Array<string> (Material IDs)
- `shippingAddress`: string
- `trackingNumber`: string
- `status`: 'requested' | 'shipped' | 'delivered' | 'approved'

### 4. Project

- `id`: string (UUID)
- `name`: string
- `code`: string (e.g., RS-8842)
- `tenantId`: string
- `status`: 'design' | 'fabrication' | 'installation' | 'completed'
- `progress`: number (0-100)

### 5. SubmittalPack

- `id`: string (UUID)
- `projectId`: string
- `type`: 'drawing' | 'technical_data' | 'method_statement'
- `files`: Array<{ url: string, version: string }>
- `status`: 'submitted' | 'approved' | 'rejected'

### 6. Shipment

- `id`: string (UUID)
- `projectId`: string
- `items`: Array<{ blockId: string, location: string }>
- `eta`: Date
- `status`: 'scheduled' | 'in_transit' | 'delivered'
