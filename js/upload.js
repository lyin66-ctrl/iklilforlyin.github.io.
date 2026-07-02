<!DOCTYPE js/upload.js>
<js/upload.js>

window.uploadImage = async function () {
  const file = document.getElementById("fileInput").files[0];
  const status = document.getElementById("status");

  if (!file) {
    status.innerText = "Please select a file first.";
    return;
  }

  status.innerText = "Uploading... 🌸";

  try {
    // 1. Upload to Storage
    const fileName = Date.now() + "-" + file.name;

    const { data, error } = await supabase
      .storage
      .from("wedding-photos")
      .upload(fileName, file);

    if (error) {
      console.log(error);
      status.innerText = "Upload failed ❌";
      return;
    }

    // 2. Get Public URL
    const { data: publicURL } = supabase
      .storage
      .from("wedding-photos")
      .getPublicUrl(fileName);

    const imageUrl = publicURL.publicUrl;

    // 3. Save to database
    const { error: dbError } = await supabase
      .from("photos")
      .insert([
        { url: imageUrl }
      ]);

    if (dbError) {
      console.log(dbError);
      status.innerText = "Saved failed ❌";
      return;
    }

    status.innerText = "Upload successful 💚✨";

    document.getElementById("fileInput").value = "";

  } catch (err) {
    console.log(err);
    status.innerText = "Something went wrong ❌";
  }
}
