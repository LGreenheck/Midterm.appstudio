
var bucketLists = []
let bucket2List = prompt("Do you want to see your bucket list or add an item? (type 'see' to see it, or type the item in to add)")

while (bucket2List != 'see') {
    bucketLists.push(bucket2List)
    bucket2List = prompt("Do you want to see your bucket list or add an item? (type 'see' to see it, or type the item in to add)")
}

console.log(bucketLists)

