import areacodesConfig from "../configs/areacodes.json";

let areaCodeRegex = new RegExp(areacodesConfig.join("|"));

if (typeof window !== "undefined") {
  window.getQueryParameter = getQueryParameter;
}

export function addPhoneValidation(phone) {
  phone.addEventListener("input", function (e) {
    var x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "");
    let result = validateAreaCode(phone.value);
    if (!result) {
      phone.setCustomValidity("Please enter valid US phone number.");
    } else {
      phone.setCustomValidity("");
    }
  });
}

export function validateField(field) {
  field.addEventListener("blur", function (e) {
    field.reportValidity();
  });
}

function validateAreaCode(phoneNumber) {
  let ret = false;
  if (phoneNumber && phoneNumber != "" && phoneNumber.includes("-") && areaCodeRegex != "") {
    let val = phoneNumber.split("-")[0];

    if (areaCodeRegex.test("1" + val)) {
      ret = true;
    }
  }
  return ret;
}

export function getSearchParams(url_string) {
  var params2 = {};
  try {
    var url = new URL(url_string);
    var search = url.search;
    search
      .substr(1)
      .split("&")
      .forEach(function (pair) {
        var keyValues = pair.split("=");
        params2[keyValues[0]] = keyValues[1];
      });
  } catch (e) {
    console.log(e);
  }
  return params2;
}

export function getQueryParameter(name) {
  var value;
  try {
    value = getSearchParams(window.location.href)[name];
  } catch (err) {
    console.log(err);
  }
  return value;
}

export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  let bottom = rect.bottom;
  return bottom > 0;
}
