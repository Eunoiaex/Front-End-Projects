let currentObject;

document.getElementById("parse-object").addEventListener("click", function() {
    const input = document.getElementById("object-input").value;

    try {
        currentObject = JSON.parse(input);
        document.getElementById("methods-container").style.display = "block";
        document.getElementById("output-result").textContent = JSON.stringify(currentObject, null, 2);
    } catch (e) {
        alert("Invalid JSON object. Please check your input.");
    }
});

document.getElementById("apply-method").addEventListener("click", function() {
    const method = document.getElementById("method-select").value;
    let result;

    switch (method) {
        case "create":
            const newProps = prompt("Enter properties for the new object in JSON format, e.g., {\"extraProp\": \"defaultValue\"}");
            try {
                const properties = JSON.parse(newProps);
                const propertyDescriptors = {};
                for (let key in properties) {
                    propertyDescriptors[key] = { value: properties[key], enumerable: true };
                }
                currentObject = Object.create(currentObject, propertyDescriptors);
                result = currentObject;
            } catch (e) {
                alert("Invalid properties format. Please enter valid JSON.");
                return;
            }
            break;

        case "assign":
            const newObj = JSON.parse(prompt("Enter properties to assign in JSON format, e.g., {\"newProp\": \"newValue\"}"));
            currentObject = Object.assign(currentObject, newObj);
            result = currentObject;
            break;

        case "keys":
            result = Object.keys(currentObject);
            break;

        case "values":
            result = Object.values(currentObject);
            break;

        case "entries":
            result = Object.entries(currentObject);
            break;

        case "freeze":
            Object.freeze(currentObject);
            result = "Object is now frozen. Try modifying it in the console!";
            break;

        case "seal":
            Object.seal(currentObject);
            result = "Object is now sealed. Try adding new properties in the console!";
            break;

        case "getOwnPropertyDescriptor":
            const prop = prompt("Enter the property name to get its descriptor:");
            result = Object.getOwnPropertyDescriptor(currentObject, prop);
            break;

        case "getPrototypeOf":
            result = Object.getPrototypeOf(currentObject);
            break;

        case "defineProperty":
            const newPropName = prompt("Enter the new property name:");
            const newPropValue = prompt("Enter the new property value:");
            Object.defineProperty(currentObject, newPropName, {
                value: newPropValue,
                writable: true,
                enumerable: true,
                configurable: true
            });
            result = currentObject;
            break;

        default:
            result = "Invalid method.";
    }

    document.getElementById("output-result").textContent = JSON.stringify(result, null, 2);
});