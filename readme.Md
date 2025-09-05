# whatBytes_Healthcare_Backend

A RESTful API to manage patients, doctors, and patient-doctor mappings, built using **Node.js**, **Express**, **Prisma**, and **PostgreSQL**.

---

## 🛠 Tech Stack

- **Language**: JavaScript (CommonJS)
- **Framework**: Express.js
- **Database**: PostgreSQL (via Prisma ORM)
- **Runtime**: Node.js

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd whatBytes_Healthcare_Backend
```
### 2. Install Dependencies

```bash
npm install
  ```



## Environment Variables

Create a .env file in the root directory:

`PORT=3000`
`DATABASE_URL="postgresql://user:password@localhost:5432/healthcare_db"`
`JWT_SECRET="your_jwt_secret"`

## Run Locally
Start the server

```bash
  npm run dev
```


## API Endpoints

### Authentication

#### Register a User
```http
POST /api/auth/register
```
#### Response data 
```
##input
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "$2b$10$hashedpasswordhere"
}

##response
{
    "message": "user registered successfully"
}
```

#### LoginIn a User
```http
POST /api/auth/login
```
#### Input and Response data 
```
##input
{
  "email": "john.doe@example.com",
  "password": "$2b$10$hashedpasswordhere"
}


##response
{
    "message": "login sucessfully",
    "token": "eyJhbGcinniJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGU3NDA3LTU0NDItNGE1Yi1iMjBlLTg3NTU4MWEyYjJlNCIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE3NTcxMDgwMzJ9.lsdTORmhlI2IG3b1TTDOM_gpPPv5muEJbbEk9SxBO28"
}
```
### Patient Management (Authenticated)
#### Add a New Patient
```http
  POST /api/patients/
```

#### Input and Response data 
```
##input
{
  "name": "Jane Smith",
  "age": 30,
  "gender": "Female"
}

##response
{
    "message": "Patient added successfully",
    "patient": {
        "id": "2a8d964f-dd13-4b41-978e-e54d0a41a097",
        "name": "Jane Smith",
        "age": 30,
        "gender": "Female",
        "userId": "91d6e5b6-284c-4212-8cf1-c8f225e5a045",
        "createdAt": "2025-09-05T21:41:32.888Z"
    }
}
```

#### Get All Patients
```http
  GET /api/patients/
```

#### Input and Response data 
```
##response
{
    "message": "Patients detail fetched succesfully",
    "patient": [
        {
            "id": "622f4a01-dabc-429b-abe9-01593654874e",
            "name": "John ",
            "age": 34,
            "gender": "Male",
            "userId": "91d6e5b6-284c-4212-8cf1-c8f225e5a045",
            "createdAt": "2025-09-05T19:12:53.068Z"
        },
        {
            "id": "2a8d964f-dd13-4b41-978e-e54d0a41a097",
            "name": "Jane Smith",
            "age": 30,
            "gender": "Female",
            "userId": "91d6e5b6-284c-4212-8cf1-c8f225e5a045",
            "createdAt": "2025-09-05T21:41:32.888Z"
        }
    ]
}
```
#### Get Patient by ID
```http
  GET /api/patients/2a8d964f-dd13-4b41-978e-e54d0a41a097
```

#### Response data 
```
##response
{
    "message": "Patient detail fetched succesfully",
    "patient": {
        "id": "2a8d964f-dd13-4b41-978e-e54d0a41a097",
        "name": "Jane Smith",
        "age": 30,
        "gender": "Female",
        "userId": "91d6e5b6-284c-4212-8cf1-c8f225e5a045",
        "createdAt": "2025-09-05T21:41:32.888Z"
    }
}
```

#### Update Patient by ID
```http
  PUT /api/patients/2a8d964f-dd13-4b41-978e-e54d0a41a097
```

#### Input and Response data 
```
##input
{
  "name": "Jane ",
  "age": 25,
  "gender": "Female"
}

##response
{
    "message": "Patient updated successfully",
    "patient": {
        "id": "2a8d964f-dd13-4b41-978e-e54d0a41a097",
        "name": "Jane ",
        "age": 25,
        "gender": "Female",
        "userId": "91d6e5b6-284c-4212-8cf1-c8f225e5a045",
        "createdAt": "2025-09-05T21:41:32.888Z"
    }
}
```

#### Delete Patient by ID
```http
  DELETE /api/patients/2a8d964f-dd13-4b41-978e-e54d0a41a097
```

#### Response data 
```
##response
{
    "message": "Patient deleted successfully"
}
```

### Doctor Management (Authenticated)

#### Add a New Doctor
```http
POST /api/doctors/
```

#### Input and Response data
```
##input
{
  "name": "setthy singh "
}

##response
{
    "message": "Doctor added successfully",
    "doctor": {
        "id": "5ebcead2-bcd6-4aa6-932a-296c6dddd8fe",
        "name": "setthy singh ",
        "userId": "91d6e5b6-284c-4212-8cf1-c8f225e5a045",
        "createdAt": "2025-09-05T21:54:56.354Z"
    }
}

```

#### Get All Doctors
```http
GET /api/doctors/
```

#### Input and Response data
```
##input
{
  "name": "setthy singh "
}

##response
{
    "message": "doctors detail fetched succesfully",
    "doctor": [
        {
            "id": "5ebcead2-bcd6-4aa6-932a-296c6dddd8fe",
            "name": "setthy singh ",
            "userId": "91d6e5b6-284c-4212-8cf1-c8f225e5a045",
            "createdAt": "2025-09-05T21:54:56.354Z"
        },
        {
            "id": "7cf6929c-7e4e-4fc1-a0b2-87dc5fdb2428",
            "name": "ravi singh ",
            "userId": "91d6e5b6-284c-4212-8cf1-c8f225e5a045",
            "createdAt": "2025-09-05T21:55:26.834Z"
        }
    ]
}

```

#### Get Doctor by ID
```http
GET /api/doctors/5ebcead2-bcd6-4aa6-932a-296c6dddd8fe
```

#### Response data
```
##response
{
    "message": "doctor detail fetched succesfully",
    "doctor": {
        "id": "5ebcead2-bcd6-4aa6-932a-296c6dddd8fe",
        "name": "setthy singh ",
        "userId": "91d6e5b6-284c-4212-8cf1-c8f225e5a045",
        "createdAt": "2025-09-05T21:54:56.354Z"
    }
}

```

#### Update Doctor by ID
```http
PUT /api/doctors/5ebcead2-bcd6-4aa6-932a-296c6dddd8fe
```

#### Imput and Response data
```
##input
{
  "name": "Dr. Shetthy singh "
}

##response
{
    "message": "Doctor updated successfully",
    "patient": {
        "id": "5ebcead2-bcd6-4aa6-932a-296c6dddd8fe",
        "name": "Dr. Shetthy singh ",
        "userId": "91d6e5b6-284c-4212-8cf1-c8f225e5a045",
        "createdAt": "2025-09-05T21:54:56.354Z"
    }
}

```

#### Delete Doctor by ID
```http
DELETE /api/doctors/5ebcead2-bcd6-4aa6-932a-296c6dddd8fe
```

#### Response data
```

##response
{
    "message": "doctor deleted successfully"
}

```


### Patient-Doctor Mapping Management (Authenticated)
#### Assign a Doctor to a Patient
```http
POST /api/mappings/
```
#### Input and Response data 
```
##input
{
  "doctorId": "d12f4a01-dabc-429b-abe9-01593654874f",
  "patientId": "2a8d964f-dd13-4b41-978e-e54d0a41a097"
}

##response
{
  "message": "d12f4a01-dabc-429b-abe9-01593654874f assigned to 2a8d964f-dd13-4b41-978e-e54d0a41a097 successfully",
  "mapping": {
    "id": "m1234567-89ab-cdef-0123-456789abcdef",
    "doctorId": "d12f4a01-dabc-429b-abe9-01593654874f",
    "patientId": "2a8d964f-dd13-4b41-978e-e54d0a41a097",
    "createdAt": "2025-09-05T22:00:00.000Z"
  }
}
```
#### Get All Mappings
```http
GET /api/mappings/
```
#### Response data
```
##response
{
  "message": "fetched all mappings successfully",
  "mappings": [
    {
      "id": "m1234567-89ab-cdef-0123-456789abcdef",
      "doctorId": "d12f4a01-dabc-429b-abe9-01593654874f",
      "patientId": "2a8d964f-dd13-4b41-978e-e54d0a41a097",
      "createdAt": "2025-09-05T22:00:00.000Z"
    }
  ]
}

```

#### Get All Doctors Assigned to a Specific Patient
```http
GET /api/mappings/2a8d964f-dd13-4b41-978e-e54d0a41a097
```
#### Response data
```
##response
{
  "message": "fetched all doctor assigned to a specific patient",
  "mappings": [
    {
      "id": "m1234567-89ab-cdef-0123-456789abcdef",
      "doctor": [{
        "id": "d12f4a01-dabc-429b-abe9-01593654874f",
        "name": "Dr. John ",
      },
     {
        "id": "5ebcead2-bcd6-4aa6-932a-296c6dddd8fe",
        "name": "Dr. Shetthy ",
      }],
      "patientId": "2a8d964f-dd13-4b41-978e-e54d0a41a097",
      "createdAt": "2025-09-05T22:00:00.000Z"
    }
  ]
}

```

#### Remove a Doctor from a Patient
```http
DELETE /api/mappings/m1234567-89ab-cdef-0123-456789abcdef
```
#### Response data
```
##response
{
  "message": "mapping deleted successfully"
}

```