//Encode a string to Base64 using the ASCII character set
String.prototype.toBase64 = function() {
    let base64 = '';
    const str = this.toString(); // Convert the string to ensure it's of string type
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i); // Get the ASCII value of the current character
      const binary = charCode.toString(2).padStart(8, '0'); // Convert to 8-bit binary representation, adding 0´s to complete 8 length
      base64 += String.fromCharCode(parseInt(binary, 2)); // Concatenate the binary values
    }
    return btoa(base64); // Encode the concatenated binary string to Base64
  };
  
  //Decode a Base64 string to ASCII 
  String.prototype.fromBase64 = function() {
    const base64 = atob(this.toString()); // Decode the Base64 string
    let ascii = '';
    for (let i = 0; i < base64.length; i++) {
      const charCode = base64.charCodeAt(i); // Get the ASCII value of the current character
      const binary = charCode.toString(2).padStart(8, '0'); // Convert to 8-bit binary representation, adding 0´s to complete 8 length
      ascii += String.fromCharCode(parseInt(binary, 2)); // Concatenate the binary values
    }
    return ascii; // Return the decoded ASCII 
  };
  
  const input = 'this is a string!!';
  const encoded = input.toBase64();
  console.log(encoded); // Result: 'dGhpcyBpcyBhIHN0cmluZyEh'
  
  const decoded = encoded.fromBase64();
  console.log(decoded); // Result: 'this is a string!!'