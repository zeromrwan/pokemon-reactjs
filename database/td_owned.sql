-- pokemon.td_owned definition

-- Drop table

-- DROP TABLE pokemon.td_owned;

CREATE TABLE pokemon.td_owned (
	id varchar(36) NOT NULL,
	pokemon_id int4 NULL,
	nickname varchar(100) NULL,
	url_image varchar(255) NULL,
	total_owned int4 NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	fib_seq int4 NULL,
	pokemon_name varchar(150) NULL,
	CONSTRAINT td_owned_pkey PRIMARY KEY (id)
);