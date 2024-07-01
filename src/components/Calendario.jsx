/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import '../style/components/Modal.css';
import 'moment/locale/pt-br';

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

// eslint-disable-next-line react/prop-types
const MyCalendar = ({ acomodacao, setAcomodacao }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectEvent = (event) => {
    setCurrentEvent(event);
    setIsEditing(true);
    setModalIsOpen(true);
  };

  const handleSelectSlot = (slotInfo) => {
    setCurrentEvent({
      start: slotInfo.start,
      end: slotInfo.end,
    });
    setIsEditing(false);
    setModalIsOpen(true);
  };

  const handleSave = () => {
    if (isEditing) {
      setAcomodacao((prevEvents) =>
        prevEvents.map((event) =>
          event.id === currentEvent.id ? currentEvent : event
        )
      );
    } else {
      setAcomodacao((prevEvents) => [
        ...prevEvents,
        { ...currentEvent, id: prevEvents.length + 1 },
      ]);
    }
    setModalIsOpen(false);
  };

  const handleChange = (field, value) => {
    setCurrentEvent((prevEvent) => ({
      ...prevEvent,
      [field]: value,
    }));
  };

  return (
    <div style={{ height: '500px', minWidth: '100%' }}>
      <Calendar
        localizer={localizer}
        events={acomodacao}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        defaultView="month"
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel={isEditing ? "Editar Evento" : "Adicionar Evento"}
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h2>{isEditing ? 'Editar Evento' : 'Adicionar Evento'}</h2>
        <form className='form-control'>
          <div>
            <label>Título:</label>
            <input
              type="text"
              value={currentEvent.title || ''}
              onChange={(e) => handleChange('title', e.target.value)}
            />
          </div>
          <div>
            <label>Início:</label>
            <input
              type="datetime-local"
              value={currentEvent.start ? moment(currentEvent.start).format('YYYY-MM-DDTHH:mm') : ''}
              onChange={(e) => handleChange('start', new Date(e.target.value))}
            />
          </div>
          <div>
            <label>Fim:</label>
            <input
              type="datetime-local"
              value={currentEvent.end ? moment(currentEvent.end).format('YYYY-MM-DDTHH:mm') : ''}
              onChange={(e) => handleChange('end', new Date(e.target.value))}
            />
          </div>
          <div className='button-group'>
            <button className='button-modal' type="button" onClick={handleSave}>
              {isEditing ? 'Salvar' : 'Adicionar'}
            </button>
            <button className='btn-secondary' type="button" onClick={() => setModalIsOpen(false)}>
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MyCalendar;
