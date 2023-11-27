# React App Code-along

## Live site

<https://react-app-codalong.vercel.app/>

## App that I borrowed code from

<https://github.com/jmsherry/new-cars-react>

# API Schemas

## Cars API

Endpoint: <https://carsapp2050.fly.dev/api/v1/cars/>

```javascript
{
  name: {
    type: String,
    required: true,
    maxLength: MAX_STRING_LENGTH, // 50
  },
  bhp: {
    type: Number,
    required: true,
    max: 10000
  },
  avatar_url: {
    type: String,
    default: "https://static.thenounproject.com/png/449586-200.png",
    maxLength: MAX_STRING_LENGTH * 10,
  },
}
```

## Drivers API

Endpoint: <https://carsapp2050.fly.dev/api/v1/drivers/>

```javascript
{
  firstname: {
    type: String,
    required: true,
    maxLength: MAX_STRING_LENGTH, // 50
  },
  lastname: {
    type: String,
    required: true,
    maxLength: MAX_STRING_LENGTH,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  email: {
    type: String, // Must be an email address
    required: true,
  },
}
```
## Todos API

Endpoint: <https://todos-api.fly.dev/api/v1/todos/>

```javascript
{
  title: {
    type: String, // Must be an email address
    required: true,
  },
  duration: {
    type: String, // Must be an email address
    required: true,
  }
  done: {
    type: Boolean, // Must be an email address
    default: false,
  }
}
```

