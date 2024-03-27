//this is coded for an imaginary database FYI
class Asset {
    constructor(data) {
      // These are the fields based on dummy data
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      // ... all other fields from your dummy data
    }
  
    // Method to simulate saving the asset to a database
    static save(data) {
      // Since there's no database, we'll just return a new asset instance
      return new Asset(data);
    }
  
    // Method to simulate finding an asset by ID
    static findById(id) {
      // In a real scenario, we'd query the database.
      // Here, we just return dummy data for the given ID
      return new Asset(getDummyData(id));
    }
  
    // Method to simulate updating an asset
    update(data) {
      // Apply the updates to this instance
      Object.assign(this, data);
      // In a real scenario, we'd save the updates to the database.
      // Since there's no database, we'll just assume the update is successful.
    }
  
    // Other static or instance methods would go here
  }
  
  // A function to return dummy data based on ID
  function getDummyData(id) {
    // This would be replaced with database logic in a real application.
    // For now, it's returning a fixed set of data.
    return {
      "id": id,
      "name": "sample name",
      // ... all other fields as in your assets.js file
    };
  }
  
  export default Asset;
  