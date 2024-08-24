import data from '../formConfig.json';

export const DobData = data.sections[1]?.questions[1] || {};
export const ssnData = data.sections[0].questions[0] || {};
export const Address1Data = data.sections[1]?.questions[1] || {};
export const Address2Data = data.sections[1]?.questions[2] || {};
export const NeiDetail2Data = data.sections[1]?.questions[7] || {};
export const NeighbourDetail1Data = data.sections[1]?.questions[7] || {};
export const YesOrNOQues = data.sections[1]?.questions[6] || {}
export const PhoneData = data.sections[1].questions[0] || {};
export const ZipData = data.sections[1]?.questions[4] || {}; 