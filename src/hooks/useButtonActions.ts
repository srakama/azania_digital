import { buttonActions } from '../components/ButtonActionHandler';

export const useButtonActions = () => {
  const handleAction = (actionKey: string) => {
    const action = buttonActions[actionKey];
    if (!action) {
      console.warn(`No action found for key: ${actionKey}`);
      return;
    }

    switch (action.type) {
      case 'external':
        if (action.url) {
          window.open(action.url, '_blank');
        }
        break;
      case 'redirect':
        if (action.url) {
          window.location.href = action.url;
        }
        break;
      case 'download':
        if (action.downloadUrl) {
          const link = document.createElement('a');
          link.href = action.downloadUrl;
          link.download = action.fileName || 'download';
          link.click();
        }
        break;
      case 'info':
        alert(action.content as string);
        break;
      case 'modal':
        // This will be handled by the ButtonActionHandler component
        // For now, we'll trigger a custom event
        window.dispatchEvent(new CustomEvent('openModal', { detail: actionKey }));
        break;
    }
  };

  return { handleAction };
};

export default useButtonActions;
