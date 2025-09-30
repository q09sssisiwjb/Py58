const queneDropZone = document.getElementById('QueneDropzone');
const nextFileButton = document.getElementById('nextFileButton');

let droppedFiles = [];
let currentIndex = 0;

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
	queneDropZone.addEventListener(eventName, e => {
		e.preventDefault();
		e.stopPropagation();
	}, false);
});

queneDropZone.addEventListener('drop', (e) => {

	const newFiles = Array.from(e.dataTransfer.files);
	droppedFiles.push(...newFiles);

    queneDropZone.innerHTML =`Filecount: ${droppedFiles.length}`;
    console.log(`Added ${newFiles.length} new file(s). Total in queue: ${droppedFiles.length}.`);

});

function startNextImageInQuene(){

	if (droppedFiles.length === 0) {
		console.log('No files loaded. Drop some files first.');
        queneDropZone.innerHTML ='Add To Quene';
		return;
	}

	if (currentIndex >= droppedFiles.length) {
		console.log('No more files. Queue is empty. Counter reset.');
        queneDropZone.innerHTML ='Add To Quene';
		currentIndex = 0;
		droppedFiles = [];
		return;
	}

	file = droppedFiles[currentIndex];
  
    dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);

    dropEvent = new DragEvent("drop", {
      dataTransfer,
      bubbles: true,
      cancelable: true
    });

    dropZone = document.querySelector("#drag-zone2");
    dropZone.dispatchEvent(dropEvent);
  
    console.log(`File ${currentIndex + 1} of ${droppedFiles.length} Name: ${file.name}`);
    
	currentIndex++;

    queneDropZone.innerHTML =`Filecount: ${droppedFiles.length - currentIndex +1}`;
};

nextFileButton.addEventListener('click', () => {
  startNextImageInQuene();
});
