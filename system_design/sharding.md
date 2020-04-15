# Sharding

Sharding is a database architecture pattern related to horizontal partitioning — the practice of separating one table’s rows into multiple different tables, known as partitions. 

[Understanding Database Sharding](https://www.digitalocean.com/community/tutorials/understanding-database-sharding)

## Benefits

- facilitate horizontal scaling, also known as scaling out. Horizontal scaling is the practice of adding more machines to an existing stack in order to spread out the load and allow for more traffic and faster processing.
- speed up query response times
- make an application more reliable by mitigating the impact of outages. Only one shard may be impacted by an outage vs the entire database.

## Drawbacks

- complexity of properly implementing a sharded database architecture
- users must manage data across multiple shard locations
- unbalanced shards

## Sharding Architectures

1. Key Based Sharding (hash based sharding)

 Involves using a value taken from newly written data — such as a customer’s ID number, a client application’s IP address, a ZIP code, etc. — and plugging it into a hash function to determine which shard the data should go to.

2. Range Based Sharding

  Range based sharding involves sharding data based on ranges of a given value. Example: online shops catalog, items priced between $0-49.99 saved in one shard, items between $50-99.99 saved in another shard.

3. Directory Based Sharding

  To implement directory based sharding, one must create and maintain a lookup table that uses a shard key to keep track of which shard holds which data. In a nutshell, a lookup table is a table that holds a static set of information about where specific data can be found.