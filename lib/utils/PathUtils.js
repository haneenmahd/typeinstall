const path = require("path");
const generateRandom = require("./generateRandom");

class PathUtils {
    /**
     * Creates a new `PathUtils` object which has some utilities to use in with the file system paths.
     */
    constructor() {
        this.instanceId = generateRandom();
    }

    /**
     * Creates a array containing every single path provided as the parameter
     * @param {string} pathTo The path to something
     */
    create(pathTo) {
        let resolvedPath = path.resolve(pathTo);
        let splittedArray = resolvedPath.split("/");

        splittedArray.map((content, index) => {
            if (content === "") splittedArray.splice(index, 1); // remove empty paths
        });

        this.path = splittedArray;

        return splittedArray;
    }

    /**
     * Removes a file or directory path from the end of the complete path
     */
    pop() {
        let poppablePath = this.path;

        poppablePath.pop();

        return poppablePath;
    }

    /**
     * Joins every single path existed in this object into one string.
     * This does not change the value of `.path` on this object, it will return the joined string instead.
     * @returns {string} The merged path
     */
    join() {
        // make sure
        let tempPath = this.path;

        tempPath[0] = `/${tempPath[0]}`;

        return tempPath.join("/");
    }
};

module.exports = PathUtils;