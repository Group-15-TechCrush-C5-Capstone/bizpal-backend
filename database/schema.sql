-- users table

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

-- customers table

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(120),
    phone VARCHAR(20), 
    company VARCHAR(120),
    status VARCHAR(50) DEFAULT 'lead',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

-- notes table

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,

    customer_id INT NOT NULL,
    user_id INT NOT NULL,

    note TEXT NOT NULL,

    follow_up_date DATE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_customer
    FOREIGN KEY(customer_id)
    REFERENCES customers(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_user
    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
)

