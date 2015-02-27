# This script loads the data set files into Hadoop HDFS.
hdfs dfs -mkdir /data
hdfs dfs -mkdir /data/adult
hdfs dfs -put ./adult/* /data/adult
# hdfs dfs -ls /data/adult
