import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { InstructionsHighligting } from '../../core/highlighting';
import { Instruction } from '../../core/model';
import { PreprocessingError } from '../../core/validator';
import { HeaderWrapper } from '../general/HeaderWrapper';
import { Wrapper } from '../general/Wrapper';
import { InstructionsLoader } from './InstructionsLoader';
import { InstructionsTable } from './InstructionsTable';

type InstructionProps = {
    instructions: Instruction[];
    validationOK: boolean;
    validationErrors: PreprocessingError[];
    pc: number;
    instructionsLoaded: (
        instructions: Instruction[],
        validationOK: boolean,
        validationErrors: PreprocessingError[]
    ) => void;

    instructionsToBeHighlighted: InstructionsHighligting | null;
};

export function Instructions(props: InstructionProps) {
    return (
        <HeaderWrapper header={'Instrukce'}>
            <InstructionsLoader instructionsLoaded={props.instructionsLoaded} />
            <InstructionsTable
                instructions={props.instructions}
                pc={props.pc}
                instructionsToBeHighlighted={props.instructionsToBeHighlighted}
            />
        </HeaderWrapper>
    );
}
