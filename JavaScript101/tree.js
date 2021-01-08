class BSTNode {
    constructor(key, value) {
        // Initializes node storage upon creation
        this.key = key;
        this.value = value;
        // Used for storing referencees to left/right children
        this.left = null;
        this.right = null;
    }
}