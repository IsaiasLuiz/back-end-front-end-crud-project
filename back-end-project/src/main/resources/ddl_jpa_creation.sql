create sequence id_category_sequence start 1 increment 1;
create sequence id_events_sequence start 1 increment 1;
create sequence id_role_sequence start 1 increment 1;
create sequence id_system_user_sequence start 1 increment 1;
create table category (category_id int8 not null, description varchar(255), primary key (category_id));
create table course (final_date date not null, start_date date not null, event_id int8 not null, primary key (event_id));
create table event (event_id int8 not null, amount int4, description varchar(255), category int8, primary key (event_id));
create table lecture (lecture_day date not null, speaker varchar(255), event_id int8 not null, primary key (event_id));
create table role (id int8 not null, name varchar(255), primary key (id));
create table system_user (id int8 not null, email varchar(255), name varchar(255), password varchar(255), primary key (id));
create table system_user_role (system_user_id int8 not null, role_id int8 not null);
alter table system_user add constraint UK_3ypdb9457wfdya51dfk3ul642 unique (email);
alter table course add constraint FKpheoxhvy6m59gvvdu6fh31o33 foreign key (event_id) references event;
alter table event add constraint FK20fbid8mdkipufxm0dvwtp59a foreign key (category) references category;
alter table lecture add constraint FKfyq76lmwq6j3edssxja2murts foreign key (event_id) references event;
alter table system_user_role add constraint FKl71b9ib2ylhgyby4x7r5bof17 foreign key (role_id) references role;
alter table system_user_role add constraint FK5soqc4583re86busn1idb194d foreign key (system_user_id) references system_user;
