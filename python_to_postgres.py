import psycopg2
import uuid

#TODO: create config file to store this data 
hostname = 'localhost'
database = 'nexus'
username = 'postgres'
pwd = 'Zhongguo20018!'
port_id = 5432


#Adds a user in postgres DB
def insert_user(first_name: str, last_name: str):
    conn = None
    cur = None

    try: 
        #Establishes new connection to database 
        conn = psycopg2.connect(
            host = hostname,
            dbname = database,
            user  = username, 
            password = pwd,
            port = port_id)

        cur = conn.cursor()

        # Creates new user record 
        insert_script = 'INSERT INTO users (id, first_name, last_name) VALUES (%s, %s, %s)'
        userID = uuid.uuid4()
        insert_values = (str(userID), first_name, last_name)

        cur.execute(insert_script, insert_values)
        conn.commit()

        return {"id": str(userID), "first_name": first_name, "last_name": last_name}

    except Exception as error:
        return {"error": str(error)}

    #Ensures the connection is properly ended 
    finally: 
        if cur is not None:    
            cur.close()
        if conn is not None: 
            conn.close