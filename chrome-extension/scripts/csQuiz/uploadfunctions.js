async function uploadCsOnSellog() {
    const token = await getToken();
    if (isNull(token)) {
      console.error('token is null', token);
      return;
   }
    return upload(token);
  }
  
  async function upload(token) {
    const git = new GitHub(token);
    const stats = await getStats();
    await git.createRecord("cs", "", "");
  }
  