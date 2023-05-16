window.addEventListener("DOMContentLoaded", () => {
  const folderData = [
    {
      id: 1,
      name: "Folder 1",
      folders: [
        {
          id: 2,
          name: "Subfolder 1.1",
          folders: [],
        },
        {
          id: 3,
          name: "Subfolder 1.2",
          folders: [],
        },
      ],
    },
    {
      id: 4,
      name: "Folder 2",
      folders: [
        {
          id: 5,
          name: "Subfolder 2.1",
          folders: [],
        },
      ],
    },
  ];

  function createFolderTree(folders, parentElement) {
    const ul = document.createElement("ul");

    folders.forEach((folder) => {
      const li = document.createElement("li");
      li.textContent = folder.name;

      if (folder.folders.length > 0) {
        createFolderTree(folder.folders, li);
      }

      ul.appendChild(li);
    });

    parentElement.appendChild(ul);
  }

  const folderTree = document.getElementById("folderTree");
  createFolderTree(folderData, folderTree);
});
