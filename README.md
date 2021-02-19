# Internet-Usage-Tracker

Will track the use of time while the browser is open. Goal is to use for work time card. Includes a basic button to start and stop the timer. Uses only vanilla js and css.

## Description

Will track the use of time while the browser is open.

## Database 

1. Install MySQL Community Edition.
2. Using the following command to create the table on your local MySQL instance.
    ```
   create table [schemaName] (
      start_timestamp DATE not null,
      end_timestamp DATE not null,
      entry_num int not null auto_increment,
      primary key (entry_num)
    );
3. Install mysql with `npm install mysql`
4. Run these command in your local MySQL instance. MySQL has made changes to their authentication protocol that Node.js has not done yet.
   [See more information here](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server).
    ```
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '[localhost_password]'
    FLUSH PRIVILIEGES

## Version History

* 0.1
    * Initial Release