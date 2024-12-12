/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    // Create a map to store merged objects by their id
    let map = new Map();

    // Helper function to merge two objects
    const mergeObjects = (obj1, obj2) => {
        return { ...obj1, ...obj2 };
    };

    // Add objects from arr1 to the map
    arr1.forEach(obj => {
        map.set(obj.id, obj);
    });

    // Merge objects from arr2 into the map, overriding keys if necessary
    arr2.forEach(obj => {
        if (map.has(obj.id)) {
            map.set(obj.id, mergeObjects(map.get(obj.id), obj));
        } else {
            map.set(obj.id, obj);
        }
    });

    // Convert the map values to an array and sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};


