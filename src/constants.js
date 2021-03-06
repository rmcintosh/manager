export const API_ROOT = 'https://api.alpha.linode.com/v4';
export const LOGIN_ROOT = 'https://login.alpha.linode.com';
export const APP_ROOT = 'http://localhost:3000';

export const LinodeStates = {
    pending: [
        "booting",
        "rebooting",
        "shutting_down",
        "migrating",
        "provisioning",
        "deleting"
    ]
};


export const LinodeStatesReadable = {
  shutting_down: "Shutting off",
  offline: "Offline",
  running: "Running",
  booting: "Booting",
  provisioning: "Provisioning",
  rebooting: "Rebooting"
};
