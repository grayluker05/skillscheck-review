INSERT INTO store_products (
    product_name,
    price,
    image
) VALUES (
    $1,
    $2,
    $3
);
returning * ;