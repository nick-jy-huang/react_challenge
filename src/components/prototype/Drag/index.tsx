import { useState, useRef, useEffect } from "react";

import CloseButton from "@/components/prototype/CloseButton";

import { DragContainer, CloseWrap } from "./style";
import { DragPropsType } from "./type";

const Drag = ({ children, x = 50, y = 50, onClose }: DragPropsType) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x, y });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dragRef.current) return;
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  return (
    <DragContainer
      ref={dragRef}
      onMouseDown={handleMouseDown}
      $top={position.y}
      $left={position.x}
    >
      <CloseWrap>
        <CloseButton onClick={onClose} />
      </CloseWrap>
      <div style={{ marginTop: "24px" }}>{children}</div>
    </DragContainer>
  );
};

export default Drag;
