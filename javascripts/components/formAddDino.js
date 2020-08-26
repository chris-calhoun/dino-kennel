const addDinoForm = () => {
  $('#dinoForm').html(`
    <div
    class="container py-4"
    style="border: 1px black solid; border-radius: 5px"
        >
        <form>
            <!-- Row 1 -->
            <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputName">Name</label>
                <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Enter name"
                />
            </div>
            <div class="form-group col-md-6">
                <label for="inputOwner">Owner</label>
                <input
                type="text"
                class="form-control"
                id="inputOwner"
                placeholder="Enter owner"
                />
            </div>
            </div>
            <!-- Row 2 -->
            <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputAge">Age</label>
                <input
                type="text"
                class="form-control"
                id="inputAge"
                placeholder="Enter age"
                />
            </div>
            <div class="form-group col-md-6">
                <label for="inputImageUrl">Image</label>
                <input
                type="text"
                class="form-control"
                id="inputImageUrl"
                placeholder="Enter image URL"
                />
            </div>
            </div>
            <!-- Row 3 -->
            <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputType">Type</label>
                <input
                type="text"
                class="form-control"
                id="inputType"
                placeholder="Enter type"
                />
            </div>
            </div>
            <!-- Row 4 -->
            <div class="form-row justify-content-end mr-3">
            <button type="button" class="col-2 btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    `);
};

export { addDinoForm };
