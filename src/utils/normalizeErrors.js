export function normalizeErrors(errors = []) {

    return errors.reduce(
        (acc, error) => {

            if (!acc[error.path]) {
                acc[error.path] = [];
            }

            acc[error.path].push(
                error.msg
            );

            return acc;

        },
        {}
    );

}