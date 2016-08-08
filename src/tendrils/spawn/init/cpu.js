import inert from '../../const/inert';

export default (data) => {
    data[0] = data[1] = inert;
    data[2] = data[3] = 0;

    return data;
};
