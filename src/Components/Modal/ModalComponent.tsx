// import Modal from "react-modal";

// interface ModalProps {
//     isOpen: boolean;
//     onClose: boolean;
//     title: string;
//     children: React.ReactNode;
// }



// function ModalComponent({isOpen, onClose, title, children}: ModalProps) {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel={title}
//       className="modal-content"
//       overlayClassName="modal-overlay"
//     >
//       <div className="p-6">
//         <h2 className="text-2xl font-semibold mb-4">{title}</h2>
//         <div>{children}</div>
//         <button
//           onClick={onClose}
//           className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
//         >
//           Close
//         </button>
//       </div>
//     </Modal>
//   );
// }

// export default ModalComponent