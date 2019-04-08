console.log('Dynamically loaded module has been loaded. Note that this only gets logged once.');

export const alertAboutDefaultExport = () => {
  window.alert('Dynamically loaded DEFAULT export function has been called!');
}

export const alertAboutNamedExport = () => {
  window.alert('Dynamically loaded NAMED export function has been called!');
}

export default alertAboutDefaultExport;
