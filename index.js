// const argv = require("yargs").argv;
 const service = require('./contacts')

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await service.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContact = await service.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await service.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await service.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list"});
// invokeAction({ action: "get", id: 'rsKkOQUi80UsgVPCcLZZW' });
// invokeAction({ action: 'add', name: "Gogi", email: 'gogi.com', phone: "063 77777777" });
// invokeAction({ action: 'remove', id: "jE0_pkIHFP6-ygkbLGbdj"})