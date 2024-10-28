#!/bin/bash


TOOLBOX_DIR=$(dirname "$0")

ENTITY_NAME=$1
ENTITY_DIR="$TOOLBOX_DIR/../src/core/entities"
ENTITY_FILE_PATH="$ENTITY_DIR/$ENTITY_NAME.ts"

REPOSITORY_DIR="$TOOLBOX_DIR/../src/core/repositories"
REPOSITORY_FILE_PATH="$REPOSITORY_DIR/${ENTITY_NAME}Repository.ts"

if [ ! -d "$ENTITY_DIR" ]; then
    mkdir -p "$ENTITY_DIR"
    echo "Diretório $ENTITY_DIR criado."
fi

if [ -f "$ENTITY_FILE_PATH" ]; then
    echo "Entidade $ENTITY_FILE_PATH já existe. Nenhuma ação foi realizada."
else
    cat <<EOL > "$ENTITY_FILE_PATH"

class $ENTITY_NAME
{

}

EOL
fi

if [ ! -d "$REPOSITORY_DIR" ]; then
    mkdir -p "$REPOSITORY_DIR"
    echo "Diretório $REPOSITORY_DIR criado."
fi

if [ -f "REPOSITORY_FILE_PATH" ]; then
    echo "Repository já existe. Nanhuma ação foi realizada."
else
    cat <<EOL > "$REPOSITORY_FILE_PATH"

interface ${ENTITY_NAME}Repository
{

}

EOL
fi








