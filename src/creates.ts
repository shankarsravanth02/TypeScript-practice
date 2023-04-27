import { DynamoDBClient, CreateTableCommand, CreateTableCommandInput } from "@aws-sdk/client-dynamodb";
const client = new DynamoDBClient({ region: "us-east-1" });

const input: CreateTableCommandInput = {
    TableName : "Movies",
    KeySchema: [       
        { AttributeName: "year", KeyType: "HASH"},    //Partition key
        { AttributeName: "title", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [       
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 100
    }
};

const run = async function () {
    try {
        const results = await client.send(new CreateTableCommand(input));
        console.log(results)
    } catch(err) {
        console.error(err)
    }
};

run();
