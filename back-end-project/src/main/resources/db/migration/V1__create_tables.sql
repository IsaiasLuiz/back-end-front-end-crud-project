create
	sequence categories_id_sequence
start with
	1 increment by 1;

create
	sequence courses_id_sequence
start with
	1 increment by 1;

create
	sequence roles_id_sequence
start with
	1 increment by 1;

create
	sequence system_users_id_sequence
start with
	1 increment by 1;

create
	table
		categories (category_id serial not null,
		description varchar(255),
		primary key (category_id));

create
	table
		COURSES (course_id serial not null,
		amount serial,
		description varchar(255),
		final_date date not null,
		start_date date not null,
		category serial,
		primary key (course_id) );

create
	table
		ROLES (id serial not null,
		name varchar(255),
		primary key (id));

create
	table
		system_users (id serial not null,
		email varchar(255),
		name varchar(255),
		password varchar(255),
		primary key (id));

create
	table
		system_users_roles (system_user_id serial not null,
		role_id serial not null);

alter table
	system_users add constraint uk_email unique (email);

alter table
	COURSES add constraint fk_courses_categories foreign key (category) references categories;

alter table
	system_users_roles add constraint fk_system_user_roles_roles foreign key (role_id) references ROLES;

alter table
	system_users_roles add constraint fk_system_users_roles_system_users foreign key (system_user_id) references system_users;