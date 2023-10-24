# Melexshop API Bindings for JavaScript

Easily integrate the Melexshop API into your JavaScript applications with the Melexshop API Bindings for JavaScript. This package provides a simple and efficient way to connect to the Melexshop e-commerce platform, allowing you to access a wide range of features and data for building innovative applications and services.

## Installation

You can install the package via npm:

```bash
npm i @melexshop/melexshop-api
```

## Usage

To get started, import the package into your JavaScript application:

```javascript
import melexshop from '@melexshop/melexshop-api';
```

### Initialize the Melexshop API

First, create a connection to the Melexshop API by providing your store token and an optional custom host (default is 'https://api.melexsoft.com'):

```javascript
const api = melexshop({ store_token: 'YOUR_STORE_TOKEN', host: 'YOUR_CUSTOM_HOST' });
```

### Access Melexshop Endpoints

The package provides access to various Melexshop endpoints, such as meta models, categories, products, filters, basket, context, page, and payment.

#### Meta Models

- Retrieve meta model information:
```javascript
const metaModelInfo = await api.metaModels.show('meta_model_id');
```

- Access indices for a meta model:
```javascript
const indices = await api.metaModels.indices.index('meta_model_id');
```

- Get all possible values for an index:
```javascript
const indexValues = await api.metaModels.indices.show('meta_model_id', 'index_name', { queryParams });
```

- Retrieve all entries inside a meta model:
```javascript
const entries = await api.metaModels.entries.index('meta_model_id', { queryParams });
```

- Get a specific entry inside a meta model:
```javascript
const entry = await api.metaModels.entries.show('meta_model_id', 'entry_identifier', { queryParams });
```

#### Categories

- Query products by category:
```javascript
const categoryProducts = await api.categories.index({ queryParams });
```

- Show category details:
```javascript
const categoryInfo = await api.categories.show('category_id', { queryParams });
```

#### Products

- Query products by various criteria:
```javascript
const products = await api.products.index({ queryParams });
```

- Show details for a specific product:
```javascript
const productInfo = await api.products.show('product_id', { queryParams });
```

#### Filters

- Retrieve all possible filters for collections:
```javascript
const collectionFilters = await api.filters.index();
```

#### Basket

- Show the current basket or create a new one:
```javascript
const basket = await api.basket.show('basket_id');
```

- Update the basket with line items:
```javascript
const updatedBasket = await api.basket.update('basket_id', lineItems);
```

#### Context

- Retrieve context information:
```javascript
const contextInfo = await api.context.show();
```

#### Page

- Retrieve information about a specific page:
```javascript
const pageInfo = await api.page.show('page_id');
```

#### Payment

- Create a payment transaction:
```javascript
const transactionId = await api.payment.create(jsonData);
```

- Confirm a payment (if no hook is provided by the Payment API):
```javascript
const confirmationResult = await api.payment.update('transaction_id', formData);
```

## License

This package is available under the [MIT License](LICENSE).